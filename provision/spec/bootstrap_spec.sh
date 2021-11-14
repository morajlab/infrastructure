Describe 'sample'
  Describe 'implemented by shell function'
    It 'performs addition'
      When call add 2 3
      The output should eq 5
    End
  End
End
