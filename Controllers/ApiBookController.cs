using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

using System.Linq;
using Microsoft.AspNetCore.Mvc;

using netbooks.Models;
using System;

namespace netbooks.Controllers
{   
    public class ApiBookController : Controller
    {
        private DataContext context { get; set; }
        public ApiBookController(DataContext ctx)
        {
            context = ctx;
        }

        [HttpGet]
        [Route("api/books")]
        public IEnumerable<Book> Get()
        {

            IQueryable<Book> query = context.Books;
            
            query = query.Include(p => p.Reviews).Include(p => p.Ratings);
            List<Book> data = query.ToList();
            return data;
            
        }

    }
}