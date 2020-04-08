# == Schema Information
#
# Table name: jokes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  comedian_id :integer          not null
#  joke        :text             not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class JokeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
