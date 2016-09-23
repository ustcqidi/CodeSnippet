#
#  Be sure to run `pod spec lint QYWebview.podspec' to ensure this is a
#  valid spec and to remove all comments including this before submitting the spec.
#
#  To learn more about Podspec attributes see http://docs.cocoapods.org/specification.html
#  To see working Podspecs in the CocoaPods repo see https://github.com/CocoaPods/Specs/
#

Pod::Spec.new do |s|
  s.name         = "React_debug"
  s.version      = "7.9.2"
  s.summary      = "React_debug"

  s.description  = <<-DESC
                    React description.
                   DESC
  s.homepage     = "http://gitlab.qiyi.domain/qidi/React"
  s.license      = { :type => 'MIT', :text => <<-LICENSE
                    LICENSE
                   }

  s.author       = { "Di Qi" => "qidi@qiyi.com" }

  s.platform     = :ios
  s.ios.deployment_target = '7.0'

  s.source       = { :git => "ssh://git@gitlab.qiyi.domain:10022/qidi/React.git", :tag => s.version }

  s.source_files = 'include/*.h'
  s.public_header_files = 'include/*.h'

  s.framework = 'SystemConfiguration'
  s.preserve_paths = 'Debug'
  s.ios.vendored_libraries = 'Debug/libReact.a'

  s.library = 'c++'

  s.requires_arc = false
end
