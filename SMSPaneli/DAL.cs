using Microsoft.Extensions.Configuration;
using SMSPaneli.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SMSPaneli
{
    public class DAL
    {




        public IConfiguration Configuration { get; }

        public Npgsql.NpgsqlConnection CreateConnection()
        {
            var configuration = Configuration;
            return new Npgsql.NpgsqlConnection(Startup.ConnectionString);

        }


    }
}
