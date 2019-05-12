using Dapper;
using SMSPaneli.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SMSPaneli.Services
{
    public interface IUserService
    {
        Task<User> AuthenticateAsync(string username, string password);
        //Task<IEnumerable<User>> GetAllAsync();
    }
    public class UserService : IUserService
    {
      
        public async Task<User> AuthenticateAsync(string username, string password)
        {

            DAL db = new DAL();
            var userConnection = db.CreateConnection();
            //Dapper.DefaultTypeMap.MatchNamesWithUnderscores = false;
          

           User user =   userConnection.QueryFirstOrDefault<User>("select * from \"Users\" where \"Username\" =@user", new { user = username });
            if (user == null)
                return user;


            if (user.Username != username  || user.PasswordHash != PasswordEncrypt(password, user.PasswordSalt))
            {

                user = null;
                return user;
            }
            else
            {
                byte[] base64String = System.Text.Encoding.UTF8.GetBytes(username + ":" + password);

                user.Password = Convert.ToBase64String(base64String);

            }
    
            return user;
     
        }
        public static string ComputeSHA512(string s)
        {
            if (string.IsNullOrEmpty(s))
                throw new ArgumentNullException();
            return Convert.ToBase64String(SHA512.Create().ComputeHash(Encoding.UTF8.GetBytes(s))).Substring(0, 86);
        }

        public string PasswordEncrypt(string password,string decryptKey)
        {
            return ComputeSHA512(password + decryptKey);


        }
      
    }
}
