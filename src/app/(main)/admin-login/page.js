'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Eye, 
  EyeOff, 
  Loader2, 
  Mail, 
  Lock, 
  Shield, 
  ArrowRight,
  Zap,
  Users,
  BookOpen,
  TrendingUp,
  Sparkles,
  Fingerprint,
  ChevronRight
} from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }

      // Store all admin data in localStorage
      localStorage.setItem('adminToken', data.token)
      localStorage.setItem('adminData', JSON.stringify({
        name: data.name,
      }))
      localStorage.setItem('user', JSON.stringify({
        name: data.name,
        isAdmin: true,
      }))

      // Store admin data in sessionStorage for immediate use
      sessionStorage.setItem('adminData', JSON.stringify({
        name: data.name,
      }))

      // Redirect to admin dashboard
      router.push('/harpreet')
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    { icon: Users, label: 'Students', value: '10,000+' },
    { icon: BookOpen, label: 'Courses', value: '200+' },
    { icon: TrendingUp, label: 'Growth', value: '+25%' },
  ]

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #e8edf5 0%, #d5dce8 25%, #cbd5e1 50%, #d5dce8 75%, #e8edf5 100%)',
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              background: `radial-gradient(circle, rgba(0,87,217,${Math.random() * 0.1 + 0.05}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 0.5 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Branding & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="relative">
                <div 
                  className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-[8px_8px_16px_#c5cdd8,-8px_-8px_16px_#ffffff]"
                  style={{
                    background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[inset_2px_2px_5px_#c5cdd8,inset_-2px_-2px_5px_#ffffff]"
                    style={{
                      background: 'linear-gradient(135deg, #0057D9, #003E99)',
                    }}
                  >
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #0057D9, #003E99)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  EduManage
                </h1>
                <p className="text-gray-600 font-medium">Admin Control Panel</p>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-5xl font-bold leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #1e293b, #334155)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Manage Your
                <br />
                Institution
                <br />
                <span className="text-[#0057D9]">With Ease</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Access powerful administrative tools to oversee students, courses, 
                and institutional performance from a single dashboard.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-2xl text-center"
                    style={{
                      background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                      boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{
                        background: 'linear-gradient(135deg, #0057D9, #003E99)',
                        boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center space-x-6"
            >
              {['Secure Access', 'Real-time Analytics', '24/7 Support'].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #0057D9, #003E99)' }}
                  />
                  <span className="text-sm text-gray-600 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mx-auto lg:mx-0"
        >
          {/* Login Card with Neumorphism */}
          <div 
            className="rounded-3xl p-8 sm:p-10"
            style={{
              background: 'linear-gradient(135deg, #e8edf5 0%, #ffffff 50%, #e8edf5 100%)',
              boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff, inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.05)',
            }}
          >
            {/* Card Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex mb-6"
              >
                <div 
                  className="w-20 h-20 rounded-3xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #0057D9, #003E99)',
                    boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff, inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  <Fingerprint className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h2>
              <p className="text-gray-600">Enter your credentials to continue</p>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  className="mb-6"
                >
                  <div 
                    className="p-4 rounded-2xl flex items-start space-x-3"
                    style={{
                      background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                      boxShadow: 'inset 4px 4px 8px #d4c5c5, inset -4px -4px 8px #ffffff',
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-800 text-sm">Authentication Failed</h3>
                      <p className="text-xs text-red-600 mt-1">{error}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                  Email Address
                </label>
                <div className="relative">
                  <div 
                    className={`rounded-2xl transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                        : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                    }`}
                  >
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <Mail className={`w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-[#0057D9]' : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none transition-all duration-300"
                      style={{
                        background: 'transparent',
                      }}
                      placeholder="admin@edumanage.com"
                    />
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                  Password
                </label>
                <div className="relative">
                  <div 
                    className={`rounded-2xl transition-all duration-300 ${
                      focusedField === 'password' 
                        ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                        : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                    }`}
                  >
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <Lock className={`w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'password' ? 'text-[#0057D9]' : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="block w-full h-[52px] pl-14 pr-14 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none transition-all duration-300"
                      style={{
                        background: 'transparent',
                      }}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-5 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between px-2">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                    />
                    <div 
                      className="w-5 h-5 rounded-md peer-checked:bg-[#0057D9] transition-all duration-200"
                      style={{
                        boxShadow: '2px 2px 4px #c5cdd8, -2px -2px 4px #ffffff',
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    Remember me
                  </span>
                </label>
                <a href="#" className="text-sm font-medium text-[#0057D9] hover:text-[#003E99] transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full h-[52px] rounded-2xl font-semibold text-white flex items-center justify-center space-x-2 transition-all duration-300 ${
                  loading 
                    ? 'opacity-80 cursor-not-allowed' 
                    : 'hover:shadow-lg'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #0057D9, #003E99)',
                  boxShadow: loading 
                    ? '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff'
                    : '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <div 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl"
                style={{
                  boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                }}
              >
                <Zap className="w-4 h-4 text-[#0057D9]" />
                <span className="text-sm text-gray-600">
                  Secure admin access portal
                </span>
              </div>
            </div>
          </div>

          {/* Help Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-center"
          >
            <a 
              href="#" 
              className="inline-flex items-center space-x-1 text-sm text-gray-600 hover:text-[#0057D9] transition-colors font-medium"
            >
              <span>Need help accessing your account?</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}