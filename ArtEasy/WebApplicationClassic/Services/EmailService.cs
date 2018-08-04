using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace WebApplicationClassic.Services
{
    public class EmailService
    {
        public void SetAdminEmail (string email)
        {
            throw new NotImplementedException();
        }

        public string GetAdminEmail ()
        {
            return "shvetsov.prof@gmail.com";
        }

        public void SendEmail(string name, string returnEmail, string title, string text)
        {
            /*
            SmtpClient smtpClient = new SmtpClient("mail.MyWebsiteDomainName.com", 25);

            smtpClient.Credentials = new System.Net.NetworkCredential("info@MyWebsiteDomainName.com", "myIDPassword");
            smtpClient.UseDefaultCredentials = true;
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtpClient.EnableSsl = true; */
            MailMessage mail = new MailMessage();

            //Setting From , To and CC
            mail.From = new MailAddress(returnEmail, name);
            mail.To.Add(new MailAddress(GetAdminEmail()));

            smtpClient.Send(mail);
        }
    }
}