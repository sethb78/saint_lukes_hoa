ActiveAdmin.register User do
    index do
    column :name
    column :unit
    column :email
    column :admin
    column :sign_in_count
    column :last_sign_in_at
        default_actions
  end
    # New/Edit forms  
  form do |f|
    f.inputs do
      f.input :name
      f.input :unit
      f.input :email
      f.input :admin
    end
    f.buttons
  end
end
