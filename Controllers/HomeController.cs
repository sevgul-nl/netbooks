using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using netbooks.Models;

namespace netbooks.Controllers
{
    public class HomeController : Controller
    {
        private DataContext context { get; set; }

        public HomeController(DataContext ctx)
        {
            context = ctx;
        }

        [Route("")]
        [Route("Home")]
        [Route("Home/Index")]
        //[Route("Home/Index/{id?}")]
        public IActionResult Index()
        {
            var books = context.Books.OrderBy(m => m.Title).ToList();
            return View(books);
        }

    }
}
