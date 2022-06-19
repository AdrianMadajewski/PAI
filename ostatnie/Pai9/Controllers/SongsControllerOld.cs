using Pai9.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace Pai9.Controllers
{
    public class SongsControllerOld : Controller
    {
        // GET: Songs
        public ActionResult Index()
        {
            // 10. The view 'Index' or its master was not found or no view engine supports the searched locations. The following locations were searched:
            Song song = new Song();
            song.Title = "Title";
            song.Artist = "Artist";
            song.Id = 1;
            song.GenreId = 1;
            return View(song);
        }

        public ActionResult Square(int id)
        {
            return Content((id * id).ToString());
        }
    }
}