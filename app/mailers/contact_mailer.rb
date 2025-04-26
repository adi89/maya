class ContactMailer < ApplicationMailer
  def shout_out
    @email = params[:email]
    @message = params[:message]
    @name = params[:name]

    mail(
      from: @email,
      subject: "#{name.titleize} Shout out",
    )
  end
end
