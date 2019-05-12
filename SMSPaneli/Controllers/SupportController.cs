using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SMSPaneli.Services;

namespace SMSPaneli.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupportController : ControllerBase
    {
        private IUserService _userService;

        public SupportController(IUserService userService)
        {
            _userService = userService;
        }

        


    }
}