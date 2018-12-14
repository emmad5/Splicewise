class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :creator_id, null: false
      t.string :description, null: false
      t.string :category, null: false, default: 'Uncategorized'
      t.boolean :settled, default: false
      t.decimal :balance, precision: 10, scale: 2 
      t.timestamps
    end
      add_index :bills, :creator_id
      add_index :bills, :category
  end
end
