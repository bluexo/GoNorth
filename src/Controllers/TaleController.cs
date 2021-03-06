using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoNorth.Controllers
{
    /// <summary>
    /// Tale controller
    /// </summary>
    [Authorize(Roles = RoleNames.Tale)]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class TaleController : Controller
    {
        /// <summary>
        /// Index view
        /// </summary>
        /// <returns>View</returns>
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Config view
        /// </summary>
        /// <returns>View</returns>
        [Authorize(Roles = RoleNames.TaleConfigManager)]
        [HttpGet]
        public IActionResult Config()
        {
            return View();
        }
    }
}
