# frozen_string_literal: true

require_relative "lib/vagrant-interactive/version"

Gem::Specification.new do |spec|
  spec.name          = "vagrant-interactive"
  spec.version       = VagrantPlugins::VagrantInteractive::VERSION
  spec.platform      = Gem::Platform::RUBY
  spec.authors       = ["Morteza Jamali"]
  spec.email         = ["mortezajamali4241@gmail.com"]

  spec.summary       = "Create interactive terminal prompt for vagrant"
  spec.description   = "Create interactive terminal prompt for vagrant"
  spec.homepage      = "https://github.com/morajlab/infrastructure"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.6.0"

  # spec.metadata["allowed_push_host"] = "TODO: Set to your gem server 'https://example.com'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/morajlab/infrastructure"
  # spec.metadata["changelog_uri"] = "TODO: Put your gem's CHANGELOG.md URL here."

  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split("\x0").reject do |f|
      (f == __FILE__) || f.match(%r{\A(?:(?:test|spec|features)/|\.(?:git|travis|circleci)|appveyor)})
    end
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "tty-prompt"

  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency "rspec", "~> 3.0"
  spec.add_development_dependency "rubocop", "~> 1.21"
end
