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
    public class DeleteModel : PageModel
    {
        private readonly Web.DAL.ArtEasyContext _context;

        public DeleteModel(Web.DAL.ArtEasyContext context)
        {
            _context = context;
        }

        [BindProperty]
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

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            TextEntity = await _context.Texts.FindAsync(id);

            if (TextEntity != null)
            {
                _context.Texts.Remove(TextEntity);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
