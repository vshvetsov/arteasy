using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Web.DAL;
using Web.DAL.Entities;

namespace Web.Pages.Texts
{
    public class CreateModel : PageModel
    {
        private readonly Web.DAL.ArtEasyContext _context;

        public CreateModel(Web.DAL.ArtEasyContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public TextEntity TextEntity { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Texts.Add(TextEntity);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}