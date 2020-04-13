# == Schema Information
#
# Table name: annotations
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  joke_id     :integer          not null
#  user_id     :integer          not null
#  start_index :integer          not null
#  end_index   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class AnnotationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
