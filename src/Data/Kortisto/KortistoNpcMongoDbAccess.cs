using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using GoNorth.Config;
using GoNorth.Data.FlexFieldDatabase;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace GoNorth.Data.Kortisto
{
    /// <summary>
    /// Kortisto Npc Mongo DB Access
    /// </summary>
    public class KortistoNpcMongoDbAccess : FlexFieldObjectBaseMongoDbAccess<KortistoNpc>, IKortistoNpcDbAccess
    {
        /// <summary>
        /// Collection Name of the kortisto npcs
        /// </summary>
        public const string KortistoNpcCollectionName = "KortistoNpc";

        /// <summary>
        /// Collection Name of the kortisto npcs recycling bin
        /// </summary>
        public const string KortistoNpcRecyclingBinCollectionName = "KortistoNpcRecyclingBin";

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="configuration">Configuration</param>
        public KortistoNpcMongoDbAccess(IOptions<ConfigurationData> configuration) : base(KortistoNpcCollectionName, KortistoNpcRecyclingBinCollectionName, configuration)
        {
        }

        /// <summary>
        /// Returns the player npc
        /// </summary>
        /// <param name="projectId">Project Id</param>
        /// <returns>Npc</returns>
        public async Task<KortistoNpc> GetPlayerNpc(string projectId)
        {
            KortistoNpc npc = await _ObjectCollection.Find(n => n.ProjectId == projectId && n.IsPlayerNpc).FirstOrDefaultAsync();
            return npc;
        }

        /// <summary>
        /// Resets the player flag to false for all npcs
        /// </summary>
        /// <param name="projectId">Project Id</param>
        /// <returns>Task</returns>
        public async Task ResetPlayerFlagForAllNpcs(string projectId)
        {
            UpdateResult result = await _ObjectCollection.UpdateManyAsync(n => n.ProjectId == projectId, Builders<KortistoNpc>.Update.Set(n => n.IsPlayerNpc, false));
        }


        /// <summary>
        /// Returns the npcs which have an item in their inventory with only the main items
        /// </summary>
        /// <param name="itemId">Item id</param>
        /// <returns>Npcs</returns>
        public async Task<List<KortistoNpc>> GetNpcsByItemInInventory(string itemId)
        {
            return await _ObjectCollection.AsQueryable().Where(n => n.Inventory.Any(i => i.ItemId == itemId)).OrderBy(n => n.Name).Select(n => new KortistoNpc {
                Id = n.Id,
                Name = n.Name
            }).ToListAsync();
        }

        /// <summary>
        /// Returns the npcs which have learned a skill with only the main values
        /// </summary>
        /// <param name="skillId">Skill id</param>
        /// <returns>Npcs</returns>
        public async Task<List<KortistoNpc>> GetNpcsByLearnedSkill(string skillId)
        {
            return await _ObjectCollection.AsQueryable().Where(n => n.Skills.Any(s => s.SkillId == skillId)).OrderBy(n => n.Name).Select(n => new KortistoNpc {
                Id = n.Id,
                Name = n.Name
            }).ToListAsync();
        }

    }
}