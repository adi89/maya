class PortfoliosController < ApplicationController
  def index
    @contact = Contact.new
  end

  def create_contact
    @contact = Contact.new(contacts_params)

    respond_to do |format|
      if @contact.save
        ContactMailer.with(contact: @contact).shout_out.deliver_later
        format.html { redirect_to portfolios_path, notice: "Contact was successfully created." }
        format.turbo_stream { render turbo_stream: turbo_stream.replace("contacts_form", partial: "success_message", locals: { contact: @contact }) }
        format.json { render :index, status: :created  }
      else
        format.html { render :index, status: :unprocessable_entity }
        format.turbo_stream { render turbo_stream: turbo_stream.replace("contacts_form", partial: "form", locals: { contact: @contact }) }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  def contacts_params
    params.require(:contact).permit("name", "email", "message")
  end
end
