class Contact < ApplicationRecord
  after_create_commit { broadcast_append_to "contacts" }
  after_update_commit { broadcast_replace_to "contacts" }
  after_destroy_commit { broadcast_remove_to "contacts" }
end
