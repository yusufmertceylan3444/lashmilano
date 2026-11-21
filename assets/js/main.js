/**
 * LASH MILANO - Core Interactive Scripts
 * Streetwear & Techwear UX
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '905305409838'; // +90 (530) 540 98 38

  // --- 1. Product 1: Spectre Hoodie - Front / Back Toggle ---
  const toggleBtns = document.querySelectorAll('.toggle-view-btn');
  const frontImg = document.getElementById('spectre-img-front');
  const backImg = document.getElementById('spectre-img-back');
  const activeViewLabel = document.getElementById('spectre-view-label');

  if (toggleBtns.length && frontImg && backImg) {
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        
        // Update button states
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle images
        if (view === 'front') {
          frontImg.classList.remove('hidden-view');
          frontImg.classList.add('active-view');
          backImg.classList.remove('active-view');
          backImg.classList.add('hidden-view');
          if (activeViewLabel) activeViewLabel.textContent = 'ÖN GÖRÜNÜM // ICON EMBROIDERY';
        } else {
          backImg.classList.remove('hidden-view');
          backImg.classList.add('active-view');
          frontImg.classList.remove('active-view');
          frontImg.classList.add('hidden-view');
          if (activeViewLabel) activeViewLabel.textContent = 'ARKA GÖRÜNÜM // ASTRAL ARTWORK';
        }
      });
    });
  }

  // --- 2. Spectre Size Selector & Dynamic WhatsApp Link ---
  let selectedSpectreSize = 'M';
  const spectreSizeChips = document.querySelectorAll('.spectre-size-chip');
  const spectreOrderBtn = document.getElementById('spectre-whatsapp-btn');
  const spectreSelectedSizeDisplay = document.getElementById('selected-spectre-size-text');

  function updateSpectreWhatsAppUrl() {
    if (!spectreOrderBtn) return;
    const message = `Merhaba Lash Milano! Spectre Zip Hoodie (Beden: ${selectedSpectreSize}) hakkında bilgi ve sipariş vermek istiyorum.`;
    const encoded = encodeURIComponent(message);
    spectreOrderBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    if (spectreSelectedSizeDisplay) {
      spectreSelectedSizeDisplay.textContent = selectedSpectreSize;
    }
  }

  if (spectreSizeChips.length) {
    spectreSizeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        spectreSizeChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedSpectreSize = chip.getAttribute('data-size');
        updateSpectreWhatsAppUrl();
      });
    });
    // Init default URL
    updateSpectreWhatsAppUrl();
  }

  // --- 3. Product 2: Custom T-Shirt WhatsApp Link ---
  const customTshirtBtn = document.getElementById('custom-tshirt-whatsapp-btn');
  if (customTshirtBtn) {
    const customMessage = `Merhaba Lash Milano! Custom T-shirt (kişiye özel tasarım) yaptırmak istiyorum. Detaylar ve tasarımım hakkında görüşebilir miyiz?`;
    customTshirtBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
  }

  // --- 4. Mobile Menu Drawer ---
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        mobileDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 5. Size Guide Modal ---
  const sizeModal = document.getElementById('size-modal');
  const openModalTriggers = document.querySelectorAll('.open-size-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  function openModal() {
    if (sizeModal) {
      sizeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (sizeModal) {
      sizeModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (openModalTriggers.length && sizeModal) {
    openModalTriggers.forEach(t => t.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    }));
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (sizeModal) {
    sizeModal.addEventListener('click', (e) => {
      if (e.target === sizeModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sizeModal && sizeModal.classList.contains('open')) {
      closeModal();
    }
  });

  // --- 6. FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close other items
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --- 7. Sticky Header Shadow on Scroll ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.borderBottomColor = 'rgba(204, 255, 0, 0.2)';
    } else {
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
  });

  // --- 8. Nav Link Active Switch on Click ---
  const desktopNavLinks = document.querySelectorAll('.nav-link-item');
  desktopNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      desktopNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
