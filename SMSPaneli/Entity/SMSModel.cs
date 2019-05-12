using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SMSPaneli.Entity
{

    public class SubmitMultiModel
    {
        public Header Header { get; set; }
        public string DataCoding { get; set; }

        public Envelope Envelopes { get; set; }
      
    }

    public class Envelope
    {
        public string Message { get; set; }
        public string To { get; set; }
    }

    public class Header
    {
        public string From { get; set; }
        public int ValidityPeriod { get; set; }
        public bool dlrpost { get; set; }
        public string url { get; set; }
        public string method { get; set; }
    }


    public class SubmitSingleModel
    {
        public Header Header { get; set; }
        public string DataCoding { get; set; }
        public string Message { get; set; }
        public string[] To { get; set; }

    }
}
