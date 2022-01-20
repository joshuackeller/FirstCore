using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FirstCore.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FirstCore.Controllers
{
    public class FirstController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Form()
        {

            return View();
        }

        [HttpPost]
        public IActionResult Form(Form model)
        {
            return View();
        }
    }
}
