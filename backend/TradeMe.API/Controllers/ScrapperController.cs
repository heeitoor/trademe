using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TradeMe.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScrapperController : ControllerBase
    {
        private readonly ILogger<ScrapperController> _logger;

        public ScrapperController(ILogger<ScrapperController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<string> Get()
        {
            return "";
        }
    }
}
