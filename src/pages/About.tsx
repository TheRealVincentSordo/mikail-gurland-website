import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, BookOpen, GraduationCap, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import SectionHeader from '../components/ui/SectionHeader';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mikail Gurland</h1>
              <p className="text-xl text-gray-600 mb-6">
                Pioneering the integration of spiritual healing and self-care in telemedicine.
              </p>
              <div className="flex items-center space-x-2 text-primary-600 mb-8">
                <Heart className="h-5 w-5" />
                <span className="font-medium">Dedicated to holistic wellbeing since 2012</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mikail Gurland portrait"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-accent-500" />
                  <span className="font-semibold">Certified Practitioner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="My Journey"
            subtitle="The path that led me to holistic telemedicine"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <p className="text-lg text-gray-700 mb-4">
                My interest in healing began during my own health challenges, which conventional medicine alone couldn't fully address. This personal experience revealed the importance of treating the whole person—not just physical symptoms.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                After completing my medical education, I pursued additional training in spiritual healing practices and self-care to develop a truly integrative approach to healthcare.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, I'm passionate about making holistic healthcare accessible to everyone through telemedicine, breaking down geographical barriers to quality, personalized care.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">Published Author</span>
                </div>
                <div className="flex items-center gap-2 bg-accent-50 px-4 py-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-accent-600" />
                  <span className="font-medium">Advanced Certifications</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Spiritual healing session"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="My Philosophy"
            subtitle="A holistic approach to health and healing"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="bg-accent-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mind-Body Connection</h3>
              <p className="text-gray-600">
                I believe that physical health is deeply connected to our emotional and spiritual wellbeing. By addressing all aspects of a person, we can achieve more complete and lasting healing.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Evidence-Based Integration</h3>
              <p className="text-gray-600">
                My approach combines the best of conventional medicine with complementary practices that have demonstrated effectiveness, creating personalized treatment plans that address the unique needs of each patient.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="bg-secondary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patient Empowerment</h3>
              <p className="text-gray-600">
                I see my role as a guide and partner in your health journey. By providing education, tools, and support, I empower you to take an active role in your healing process and ongoing wellness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Credentials & Training"
            subtitle="A lifetime commitment to learning and excellence"
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-50 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Medical Doctorate</h3>
                    <p className="text-gray-600 mb-1">Harvard Medical School</p>
                    <p className="text-gray-500">2005 - 2009</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-50 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Residency in Internal Medicine</h3>
                    <p className="text-gray-600 mb-1">Mayo Clinic</p>
                    <p className="text-gray-500">2009 - 2012</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-50 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Master's in Self-Care</h3>
                    <p className="text-gray-600 mb-1">University of Pennsylvania</p>
                    <p className="text-gray-500">2014 - 2016</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-accent-50 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Certified in Mind-Body Medicine</h3>
                    <p className="text-gray-600 mb-1">Center for Mind-Body Medicine</p>
                    <p className="text-gray-500">2013</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-accent-50 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Advanced Training in Spiritual Healing</h3>
                    <p className="text-gray-600 mb-1">International Association of Spiritual Healers</p>
                    <p className="text-gray-500">2015</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-accent-50 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Telemedicine Certification</h3>
                    <p className="text-gray-600 mb-1">American Telemedicine Association</p>
                    <p className="text-gray-500">2018</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Holistic Telemedicine</h2>
            <p className="text-xl text-gray-600 mb-8">
              I'm committed to helping you achieve optimal health through personalized, integrative care. Let's begin your wellness journey together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking" className="btn btn-primary text-lg">
                Book a Consultation
              </Link>
              <Link to="/services" className="btn btn-outline text-lg">
                Explore My Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;