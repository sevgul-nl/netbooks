using Microsoft.AspNetCore.Mvc;
using netbooks.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace netbooks.Controllers
{

    public class ApiReviewController : Controller
    {
        private DataContext context { get; set; }
        public ApiReviewController(DataContext ctx)
        {
            context = ctx;
        }

        [HttpGet]
        [Route("api/reviews/{id}")]
        public Book List(long id)
        {
            //return Content("Review controller, List action id=" + id);
            ViewBag.Action = "List";

            var book = context.Books.Find(id);
            var reviews = context.Reviews.Where(r => r.BookId == id);
            book.Reviews = reviews.ToList();
            //Console.WriteLine("book review count=" + book.Reviews.Count);
            if (book.Reviews == null)
                book.Reviews = new List<Review>();
            return book;
        }

    }
}