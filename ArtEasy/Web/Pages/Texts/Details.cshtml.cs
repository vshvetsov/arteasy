using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Web.DAL;
using Web.DAL.Entities;

namespace Web.Pages.Texts
{
    public class DetailsModel : PageModel
    {
        private readonly Web.DAL.ArtEasyContext _context;

        public DetailsModel(Web.DAL.ArtEasyContext context)
        {
            _context = context;
        }

        public TextEntity TextEntity { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            TextEntity = await _context.Texts.SingleOrDefaultAsync(m => m.ID == id);

            if (TextEntity == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
