class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.integer :user_id, null: false
      t.integer :bill_id, null: false
      t.decimal :amount, null: false
      t.boolean :paid, default: false
      t.timestamps
    end
    add_index :payments, :user_id
    add_index :payments, :bill_id
  end
end
