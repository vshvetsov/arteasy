using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Web.DAL;
using Web.DAL.Entities;

namespace Web.Pages.Texts
{
    public class EditModel : PageModel
    {
        private readonly Web.DAL.ArtEasyContext _context;

        public EditModel(Web.DAL.ArtEasyContext context)
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

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(TextEntity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TextEntityExists(TextEntity.ID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool TextEntityExists(int id)
        {
            return _context.Texts.Any(e => e.ID == id);
        }
    }
}
