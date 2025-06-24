"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Briefcase, MapPin, Clock } from 'lucide-react';

// Placeholder job listings data
const jobListings = [
  {
    id: 1,
    title: 'AI Research Scientist',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking a passionate AI Research Scientist to develop cutting-edge machine learning models and explore innovative AI solutions.',
    requirements: [
      'PhD or Master\'s in Computer Science, Machine Learning, or related field',
      '3+ years of experience in AI research',
      'Strong background in deep learning, NLP, and computer vision',
      'Published research in top-tier AI conferences'
    ]
  },
  {
    id: 2,
    title: 'Senior AI Software Engineer',
    location: 'Ongole, Andhra Pradesh',
    type: 'Full-time',
    description: 'Join our team to build scalable AI-powered applications and develop robust machine learning infrastructure.',
    requirements: [
      'Bachelor\'s or Master\'s in Computer Science',
      '5+ years of software engineering experience',
      'Expertise in Python, TensorFlow, or PyTorch',
      'Experience with cloud AI services (AWS, GCP, Azure)'
    ]
  },
  {
    id: 3,
    title: 'AI Product Manager',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Lead the strategic development of our AI product portfolio, bridging technical innovation with market needs.',
    requirements: [
      'MBA or relevant advanced degree',
      '4+ years of product management experience in tech',
      'Deep understanding of AI technologies and market trends',
      'Strong communication and leadership skills'
    ]
  }
];

export default function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<typeof jobListings[0] | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const handleApply = (job: typeof jobListings[0]) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplicationData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual application submission logic
    console.log('Application submitted:', { job: selectedJob, ...applicationData });
    
    // Reset form and close modal
    setApplicationData({
      name: '',
      email: '',
      resume: null,
      coverLetter: ''
    });
    setIsApplyModalOpen(false);
  };

  return (
    <section id="careers" className="py-12 sm:py-16 md:py-24 bg-background/70 dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join in <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
            Be part of a cutting-edge team transforming industries through AI. We're always looking for passionate innovators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {jobListings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 dark:bg-card/30 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                  <div className="flex items-center space-x-2 text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                    <Clock className="h-4 w-4 ml-3" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <p className="text-foreground/80 mb-4">{job.description}</p>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Requirements:</h4>
                <ul className="list-disc list-inside text-sm text-foreground/70">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <Button 
                onClick={() => handleApply(job)}
                className="w-full bg-[#FFC000] text-black hover:bg-[#FFD44D] transition-all"
              >
                Apply Now
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Application Modal */}
        <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
              <DialogDescription>
                Submit your application to join our innovative AI team.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitApplication} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={applicationData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={applicationData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="resume">Resume/CV</Label>
                <div className="flex items-center">
                  <Input 
                    type="file" 
                    id="resume" 
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    required 
                    className="flex-grow mr-2"
                  />
                  <Upload className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea 
                  id="coverLetter" 
                  name="coverLetter"
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're a great fit for this role..."
                  rows={4}
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#FFC000] text-black hover:bg-[#FFD44D] transition-all"
              >
                Submit Application
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
} 
