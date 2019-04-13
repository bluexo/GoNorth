// GoNorth - Created by Steffen Noertershaeuser
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using GoNorth.Logging;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace GoNorth
{
    /// <summary>
    /// Program root class
    /// </summary>
    public class Program
    {
        /// <summary>
        /// Main Entry
        /// </summary>
        /// <param name="args">Arguments</param>
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json", optional: true)
               .AddCommandLine(args)
               .Build();

            NPOI.XSSF.UserModel.XSSFWorkbook xSSFWorkbook;
            var host = new WebHostBuilder()
                .UseConfiguration(config)
                .ConfigureLogging(builder => builder.AddFile())
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
