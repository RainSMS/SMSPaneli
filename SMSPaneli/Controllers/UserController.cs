using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SMSPaneli.Entity;
using SMSPaneli.Services;

namespace SMSPaneli.Controllers
{
    [Authorize]
 
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [AllowAnonymous]
        [HttpPost]
        [Route("api/auth/login")]
        public async Task<IActionResult> Login([FromBody]User userParam)
        {
            var user = await _userService.AuthenticateAsync(userParam.Username, userParam.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });
            byte[] base64String = System.Text.Encoding.UTF8.GetBytes(userParam.Username + ":" + userParam.Password);

            user.Password = Convert.ToBase64String(base64String);
            return Ok(new { token=base64String,info=user });
        }

        //[HttpGet]
        //public async Task<IActionResult> GetAll()
        //{
        //    var users = await _userService.GetAllAsync();
        //    return Ok(users);
        //}
    }
}