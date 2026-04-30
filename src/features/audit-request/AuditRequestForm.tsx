"use client";

import { useState } from 'react';
import { Navbar } from '@/sections/Navbar';
import { Footer } from '@/sections/Footer';
import { Send, Upload, X, CheckCircle, AlertCircle } from 'lucide-react';

export const AuditRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: '',
    blockchain: '',
    urgency: 'normal'
  });

  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setAttachments(prev => [...prev, ...newFiles]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      
      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Add attachments
      attachments.forEach((file, index) => {
        formDataToSend.append(`attachment_${index}`, file);
      });

      // Create mailto link as fallback
      const mailtoSubject = encodeURIComponent(`Demande de prestation: ${formData.subject}`);
      const mailtoBody = encodeURIComponent(
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Entreprise: ${formData.company}\n` +
        `Type de prestation: ${formData.projectType}\n` +
        `Contexte: ${formData.blockchain}\n` +
        `Urgence: ${formData.urgency}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Note: ${attachments.length} pièce(s) jointe(s)`
      );

      // Open mailto link
      window.location.href = `mailto:contact@blockhack.io?subject=${mailtoSubject}&body=${mailtoBody}`;

      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          projectType: '',
          blockchain: '',
          urgency: 'normal'
        });
        setAttachments([]);
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="relative pt-32 pb-20 px-6">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Soumettre une <span className="text-cyan-400">demande</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Audit d’infrastructure, AMO, DevSecOps, réponse à appel d’offres — décrivez votre besoin et nous vous recontactons sous 48 h ouvrables.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Informations de contact</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Entreprise / Organisation
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Nature de la prestation</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Type de prestation <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2322d3ee'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    <option value="" className="bg-gray-900 text-white">Sélectionner...</option>
                    <option value="architecture_reseau" className="bg-gray-900 text-white">Architecture réseau / télécoms</option>
                    <option value="devsecops" className="bg-gray-900 text-white">DevSecOps / S-SDLC</option>
                    <option value="amo" className="bg-gray-900 text-white">AMO — assistance à maîtrise d’ouvrage</option>
                    <option value="marche_public" className="bg-gray-900 text-white">Réponse à appel d’offres / groupement</option>
                    <option value="fibre_vrd" className="bg-gray-900 text-white">Fibre optique / VRD</option>
                    <option value="audit_infra" className="bg-gray-900 text-white">Audit d’infrastructure numérique</option>
                    <option value="iac" className="bg-gray-900 text-white">Infrastructure as Code / infogérance</option>
                    <option value="other" className="bg-gray-900 text-white">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Contexte organisationnel <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="blockchain"
                    value={formData.blockchain}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2322d3ee'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    <option value="" className="bg-gray-900 text-white">Sélectionner...</option>
                    <option value="collectivite" className="bg-gray-900 text-white">Collectivité territoriale</option>
                    <option value="etablissement_public" className="bg-gray-900 text-white">Établissement public (éducation, santé, culture)</option>
                    <option value="operateur" className="bg-gray-900 text-white">Opérateur public / parapublic</option>
                    <option value="administration" className="bg-gray-900 text-white">Administration centrale ou décentralisée</option>
                    <option value="entreprise_privee" className="bg-gray-900 text-white">Entreprise privée</option>
                    <option value="ese" className="bg-gray-900 text-white">ESN / bureau d’études</option>
                    <option value="other" className="bg-gray-900 text-white">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Urgence
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2322d3ee'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  <option value="low" className="bg-gray-900 text-white">Basse — pas de contrainte calendaire</option>
                  <option value="normal" className="bg-gray-900 text-white">Normale — délai standard (2–4 semaines)</option>
                  <option value="high" className="bg-gray-900 text-white">Haute — date de remise d’offre proche</option>
                  <option value="urgent" className="bg-gray-900 text-white">Urgente — moins d’une semaine</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Votre demande</h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Objet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Audit d’infrastructure réseau — campus universitaire 3 sites"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Décrivez votre contexte, vos contraintes techniques et organisationnelles, le calendrier prévisionnel et toute référence documentaire disponible..."
                />
                <p className="text-sm text-gray-400 mt-2">
                  Joignez si possible le cahier des charges, le CCTP, un schéma réseau ou tout document d’architecture utile à la qualification de la demande.
                </p>
              </div>
            </div>

            {/* Attachments */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Pièces jointes</h2>
              
              <div className="mb-4">
                <label className="flex items-center justify-center w-full px-4 py-6 bg-white/5 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/10 hover:border-cyan-400/50 transition-all">
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                    <p className="text-sm text-gray-400">
                      Cliquez pour ajouter des fichiers
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Cahier des charges, CCTP, schéma réseau, maquette, documentation technique…
                    </p>
                  </div>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.sol,.rs,.js,.ts,.md"
                  />
                </label>
              </div>

              {/* Attachment List */}
              {attachments.length > 0 && (
                <div className="space-y-2">
                  {attachments.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-cyan-400/20 flex items-center justify-center">
                          <span className="text-xs text-cyan-400">
                            {file.name.split('.').pop()?.toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-gray-400">
                            {(file.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-green-400">
                  Votre demande a été transmise. Nous vous recontactons sous 48 h ouvrables.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-400">
                  Une erreur s’est produite lors de l’envoi. Veuillez réessayer ou nous écrire directement à contact@blockhack.io.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-600 text-white py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer la demande
                </>
              )}
            </button>

            <p className="text-sm text-gray-400 text-center mt-4">
              Les informations transmises sont utilisées exclusivement pour traiter votre demande. Elles ne font l’objet d’aucune cession ni d’utilisation commerciale.
            </p>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-2">
              Vous préférez un échange direct ?
            </p>
            <a
              href="mailto:contact@blockhack.io"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              contact@blockhack.io
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
