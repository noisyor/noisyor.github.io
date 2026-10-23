---
title: "Home"
layout: single
author_profile: false
page_navigation: false
---

![Profile]({{ "/assets/saion.jpg" | relative_url }}){: .align-left style="max-width: 150px; border-radius: 50%;" }

### Saion K. Roy
Postdoctoral Researcher, Northeastern University
📍 Boston, MA | ✉️ sai.roy@northeastern.edu

---

## About Me

I am a postdoctoral researcher at Northeastern University, [Department of Electrical and Computer Engineering](https://ece.northeastern.edu/). Prior to this, I obtained my Ph.D. in [Electrical and Computer Engineering](https://ece.illinois.edu/) from the University of Illinois Urbana-Champaign (UIUC) in 2024, and my bachelor's and master's in [Electronics and Electrical Communication Engineering](https://www.iitkgp.ac.in/department/EC) from IIT Kharagpur in 2018.

Meeting AI’s growing computational demands requires accelerators that deliver high throughput with high energy efficiency. In-memory computing (IMC), a full-stack computing approach, addresses this challenge by performing computation directly in memory, reducing the energy cost of data movement. Realizing these gains requires algorithm-architecture-circuit co-design that accounts for how device and circuit properties affect inference accuracy. These same properties also influence model confidentiality and inference integrity, connecting accelerator design with hardware security.

My research builds on this connection through energy-efficient IMC design and investigations of confidentiality and integrity attacks on custom IMC chips and commercial AI accelerators, including GPUs. Understanding the hardware mechanisms behind these attacks guides protections against leakage and malicious computation, feeding security requirements back into architecture and circuit design. My long-term goal is to design low-power AI accelerators for emerging AI workloads on resource-constrained platforms, treating security and energy efficiency as joint design requirements. Some of my recent works address:

**Energy-efficient eNVM in-memory computing accelerator design**

1. a compositional benchmarking framework that compares over 100 IMC and digital chips using bit-normalized throughput, energy efficiency, and compute density (OJ-SSCS 2022, CICC 2022).
2. statistical models of resistive IMCs for MRAM, ReRAM, and FeFET, which set their compute-SNDR limits and energy-accuracy trade-offs (JxCDC 2024, ISCAS 2022).
3. an accuracy-boosted 22 nm MRAM IMC macro that raises compute SNDR through offset-compensating current sensing and statistical error compensation (JSSC 2024, ESSCIRC 2023).

**Security vulnerabilities of ML accelerators**

1. Rowhammer-based backdoor injection during DNN inference through DRAM bit flips, and vulnerability-aware DRAM page allocation that keeps model weights off Rowhammer-prone pages (ICCAD 2026).
2. side-channel attacks on consumer hardware, from a CPU-to-GPU Prime+Probe channel through the Apple M1 system-level cache to unsupervised transfer-learning attacks across devices and modalities (CCS 2026, AsiaCCS 2026).
3. the energy-accuracy-security trade-offs in resistive IMCs, where analog noise lowers compute SNDR but does not protect stored weights from model extraction attacks (TCAD 2026, IEDM 2024, ICCAD 2024).
4. hardware-Trojan detection that repurposes existing on-chip differential temperature sensors in a 65 nm ASIC (TCAS-I 2026).

---

## News

- **April 2025:** Invited talk at NEHWS 2025, MIT
- **March 2025:** SRC JUMP 2.0 Review, Georgia Tech
- **Dec 2024:** New paper at IEDM
- **Oct 2024:** New paper at ICCAD
- **July 2024:** Ph.D. awarded from UIUC
