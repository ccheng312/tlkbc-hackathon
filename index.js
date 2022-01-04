var SUPABASE_URL = 'https://oxaywlcznaxwkwtfprge.supabase.co'
var SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTE5NDQ2MywiZXhwIjoxOTU2NzcwNDYzfQ.-Y4xgJH3q_YAV07WUTEDMV851MoG4rbcPv_QzNdRH_M'

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

$(document).ready(function() {
  $('#search-button').click(findUser)
})

const findUser = async function() {
  var email = $('#search-text').val()
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('email', email)
  $('#results').text(JSON.stringify(data[0]))
}
