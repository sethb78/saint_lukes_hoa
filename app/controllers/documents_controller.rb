class DocumentsController < InheritedResources::Base

def index 
	@documents = Document.all
end

def show
	flash[:error] = "Only Registered Users May View This Document"
    redirect_to root_path
	end
end