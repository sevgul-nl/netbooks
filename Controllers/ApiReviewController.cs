using Microsoft.AspNetCore.Mvc;
using netbooks.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace netbooks.Controllers
{

    [ApiController]
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
            //ViewBag.Action = "List";

            var book = context.Books.Find(id);
            var reviews = context.Reviews.Where(r => r.BookId == id);
            book.Reviews = reviews.ToList();
            //Console.WriteLine("book review=" + book.Reviews);
            if (book.Reviews == null)
                book.Reviews = new List<Review>();
            return book;
        }

        [HttpGet]
        [Route("api/review/edit/{id}")]
        public Review Edit(long id)
        {
            
            var review = context.Reviews.Find(id);
            return review;
        }

        [HttpPost]
        [Route("api/review/edit/{id?}")]
        public IActionResult Edit([FromBody] Review review, long id)
        {
            //Console.WriteLine("BookId = " + review.BookId);
            if (ModelState.IsValid && review.BookId > 0)
            {
                if (review.ReviewId == 0)
                    context.Reviews.Add(review);
                else
                    context.Reviews.Update(review);
                context.SaveChanges();
                return Ok(review.ReviewId);
            } else {
                return BadRequest(ModelState);
            }
           
        }



        [HttpPost]
        [Route("api/review/delete/{id}")]
        public Book Delete(Review review)
        {
            review = context.Reviews.Find(review.ReviewId);
            var bookId = review.BookId;
            context.Reviews.Remove(review);
            context.SaveChanges();
            var book = context.Books.Find(review.BookId);
            return book;
        }

    }
}