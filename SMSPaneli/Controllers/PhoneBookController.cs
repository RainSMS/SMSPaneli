using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SMSPaneli.Entity;
using SMSPaneli.Services;
using Dapper;
using Npgsql;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace SMSPaneli.Controllers
{
    [Authorize]
    [ApiController]
    public class PhoneBookController : ControllerBase
    {
        private IUserService _userService;
        public IConfiguration Configuration { get; }
        public PhoneBookController(IUserService userService,IConfiguration configuration)
        {
            _userService = userService;
            Configuration = configuration;
        }
        [Route("api/phonebook/groups/add")]
        [HttpPost]
        public async Task<IActionResult> grupekle([FromBody] PhonebookGroupModel isim)
        {

            
            
  
            


            return CreatedAtAction("grupekle", new { result ="ok" });
            
        }
        [Route("api/phonebook/groups/update")]
        [HttpPost]
        public async Task<IActionResult> grupupdate([FromBody] PhonebookGroupModel isim)
        {

            return CreatedAtAction("grupekle", new { result = "ok" });

        }
        [Route("api/phonebook/groups/list")]
        [HttpGet]
        public async Task<IActionResult> gruplar()
        {
            DAL d = new DAL();
            var db = d.CreateConnection();

            var model = await db.QueryAsync("select isim from tbl_phonebook_groups where cust_id=@id",new { id=1});
            var test = model.ToList();
            return CreatedAtAction("gruplar", new { result = "ok",model = test });

        }
        [Route("api/phonebook/groups/delete")]
        [HttpDelete]
        public async Task<IActionResult> grupsil([FromBody] PhonebookGroupModel isim)
        {

            return CreatedAtAction("grupsil", new { result = "ok" });

        }

    }
}