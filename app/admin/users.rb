ActiveAdmin.register User do
    index do
    column :name
    column :unit
    column :email
    column :approved
    column :admin
        default_actions
  end
    # New/Edit forms  
  form do |f|
    f.inputs do
      f.input :name
      f.input :unit
      f.input :email
      f.input :approved
      f.input :admin
    end
    f.buttons
  end
end
