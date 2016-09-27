# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'c80_wslider2/version'

Gem::Specification.new do |spec|
  spec.name          = "c80_wslider2"
  spec.version       = C80Wslider2::VERSION
  spec.authors       = ["C80609A"]
  spec.email         = ["c080609a@gmail.com"]

  spec.summary       = "Wide screen slider gem, ver 2"
  spec.description   = "Gem adds wide screen slider to site"
  spec.homepage      = "https://github.com/c080609a/c80_wslider2"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_dependency 'activesupport', ['>= 3.0.0']

end
