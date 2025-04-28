class ContactMailer < ApplicationMailer
  def shout_out
    @contact = params[:contact]

    mail(
      from: @contact.email,
      subject: "#{@contact.name.titleize} Shout out",
    )
  end
end
