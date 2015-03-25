ActiveAdmin.register Document do
  
  index do
    column :doctype
    column :title
    default_actions
  end

  form do |f|
    f.inputs "Documents" do
      f.semantic_errors *f.object.errors.keys
      f.input :doctype, :as => :select, :collection =>["rules","meetings", "other", "memorandums", "financials"]
      f.input :title
      f.input :document
      f.input :meeting_date
    end
    f.actions
  end
end


