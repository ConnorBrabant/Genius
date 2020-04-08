# == Schema Information
#
# Table name: comedians
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class ComedianTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
