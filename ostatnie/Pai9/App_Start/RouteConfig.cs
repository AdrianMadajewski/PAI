using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Pai9
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            /* Dla innej kolejnosci jest blad 
             * 
             * Server Error in '/' Application.
                The resource cannot be found.
                Description: HTTP 404. The resource you are looking for (or one of its dependencies) could have been removed, had its name changed, or is temporarily unavailable.  Please review the following URL and make sure that it is spelled correctly.

                Requested URL: /

                Version Information: Microsoft .NET Framework Version:4.0.30319; ASP.NET Version:4.8.4494.0 
             */

            routes.MapRoute(
              name: "Default",
              url: "{controller}/{action}",
              defaults: new { controller = "Songs", action = "Index", id = UrlParameter.Optional }
          );

           /* routes.MapRoute(
                name: "SongsSquare",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Square", id = 23 }
            );
           */

            
        }
    }
}
