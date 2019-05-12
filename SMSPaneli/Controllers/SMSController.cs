using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SMSPaneli.Entity;


namespace SMSPaneli.Controllers
{
 
    [ApiController]
    public class SMSController : ControllerBase
    {
        [Route("api/sms/submitsingle")]
        [HttpPost]
        public async Task<IActionResult> SingleSMS([FromBody] SubmitSingleModel sms)
        {
            
            return CreatedAtAction("grupekle", new { result = "ok" });
        }
        [Route("api/sms/SubmitMulti")]
        [HttpPost]
        public async Task<IActionResult> MultiSMS([FromBody] SubmitMultiModel sms)
        {

            return CreatedAtAction("grupekle", new { result = "ok" });
        }


    }
}