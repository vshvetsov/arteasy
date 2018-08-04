using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplicationClassic.Services;

namespace WebApplicationClassic
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Unnamed_Click(object sender, EventArgs e)
        {
            var name = "Test";
            var returnEmail = "ReturnEmail@mail.ru";
            var title = "SomeTitle";
            var text = "some big big big text";
            var emailService = new EmailService();
            emailService.SendEmail(name, returnEmail, title, text);
        }
    }
}