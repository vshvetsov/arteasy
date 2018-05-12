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
    public class IndexModel : PageModel
    {
        private readonly Web.DAL.ArtEasyContext _context;

        public IndexModel(Web.DAL.ArtEasyContext context)
        {
            _context = context;
        }

        public IList<TextEntity> TextEntity { get;set; }

        public async Task OnGetAsync()
        {
            TextEntity = await _context.Texts.ToListAsync();
        }
    }
}
