using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pai9.Models
{
    public class Genre
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Song> Songs { get; set; }

    }
}