using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SMSPaneli.Entity
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Source { get; set; }
        public string mobilenumber { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public object LastDirectoryUpdate { get; set; }
        public object UserImage { get; set; }
        public string InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public object UpdateDate { get; set; }
        public object UpdateUserId { get; set; }
        public int CustomerUserId { get; set; }
        public int IsActive { get; set; }
    }

    
}
