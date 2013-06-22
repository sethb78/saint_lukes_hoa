ActiveAdmin.register Update do
 index do
    column :title
    column :content
    default_actions
  end

  form do |f|
    f.inputs "Updates" do
      f.input :title
      f.input :content
      f.input :send_email
    end
    f.actions
  end
end
