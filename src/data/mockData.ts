import { ServiceItem, Testimonial, ValueProp, RepairTicket, StoreLocation } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'laptop-maintenance',
    title: 'Laptop Maintenance',
    shortDesc: 'Deep cleaning, thermal paste replacement, and hardware diagnostics to keep your high-performance laptop running at its peak potential.',
    fullDesc: 'Our laptop engineering team provides component-level diagnostics, BGA reflowing, logic board repair, thermal architecture overhaul (using liquid metal or high-conductivity thermal compound), liquid damage remediation, and keyboard/chassis replacements for MacBook, XPS, ThinkPad, and gaming laptops.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnpg-VqIUDjWGBTcL1ecPf9N9jKBhczOUCLI8tKz6xZhrEXST2EI0b8QL510CBOoVErvsfvCzf8pbjNgfJkAGnggn2sgkJKPDNFXphed2d8h7dPnAe6Q2G_44eb9dz3Gh7E390VnJ-ECXUBTngixrj6qnpJ0IfEHY1PDPPZi-iTWi3j3gV7iMXW_JvsREtVnBf4pkbvG2ZwRbTqf1tCNfnOY0QAemJxXvVHcbLASI4o8FZSXkBzJIL',
    turnaround: '24 - 48 Hours',
    startingPrice: '$45',
    features: [
      'Microscope Motherboard Diagnostic',
      'Thermal Paste Overhaul (Arctic MX-6 / Liquid Metal)',
      'Internal Ultrasonic Cleanroom Dusting',
      'NVMe SSD Upgrades & Data Recovery',
      'Display Flex & Hinge Alignment'
    ],
    toolsUsed: ['Thermal Imaging Camera', 'ESD Ultrasonic Cleaner', 'Digital Oscilloscope', 'Micro-soldering Station']
  },
  {
    id: 'mobile-maintenance',
    title: 'Mobile Maintenance',
    shortDesc: 'Precision screen replacements, battery calibration, and motherboard microsoldering for all flagship smartphone brands.',
    fullDesc: 'We specialize in microsoldering IC chips, power delivery circuits, OLED screen replacement with TrueTone & OLED recalibration, battery cell replacement with zero cycle counts, and structural waterproofing restoration on iPhone, Samsung Galaxy, and Google Pixel devices.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUA_RxMwCPWE8jxAKLKDo8cIIDDjf5QMkFHhJy9t0QQ-BHOfpcII_NhwP8-3hQKyqNcmLy4qC-HhBrGuVOp6-T5anYBpm76RG_22R2A8w8YRoecVCsgXSExIxDNziJlh48ZmEbid617khPYI9HsMN2F9PaJNkS55mS67O5tPdvGbp0D7hQLMXSH5wp3CjfAVk7-RBfSeMn8QqxrVqE9MtC2pAVATaMffmhEG6GtcNzz1drsxH6N82h',
    turnaround: 'Same Day / 2-4 Hours',
    startingPrice: '$35',
    features: [
      'Original Manufacturer Grade Screens',
      'Motherboard Micro-soldering (Baseband, Audio IC, Tristar)',
      'IP68 Waterproof Seal Replacement',
      'Battery Health Diagnostic & Cell Swap',
      'FaceID / TouchID Sensor Alignment'
    ],
    toolsUsed: ['Laser Back Glass Remover', 'Microscope Soldering Iron', 'Battery Programmer', 'Pressure Seal Tester']
  },
  {
    id: 'it-solutions',
    title: 'IT Solutions',
    shortDesc: 'Enterprise-grade network configuration, cloud integration, and cybersecurity audits for small businesses and home offices.',
    fullDesc: 'Empowering local enterprises with structured Cat6A/Fiber optic networking, Ubiquiti UniFi deployment, firewall and VPN architecture, NAS data backup redundancy, and 24/7 technical helpdesk monitoring.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsQBP8xVijQs2L9ytgRtqw1Zm6-h1HKm3F7uHyuxpbuQQOjBErBmUDkoyb7Q1ixihjuq8TOGiQgpA8PbmVZ3DGhEITg-G9pwDJ9PfzeeM08-JmvDqiKenAT-XnCj2Tue_gjNhQQ5F2dH4OExLo9BZet63WERibRx1A_Jcu3s51qPvXCjuLdfiE1jsPUQXRgQXD4mmoCCCA-wpjsd8ePhvt60VXIri1N275kgMBWGkd8LVN3PMYJJhP',
    turnaround: 'Custom On-Site Deployment',
    startingPrice: '$150',
    features: [
      'Structured Cabling & Server Rack Organization',
      'Managed Router, Switch & Access Point Setup',
      'Automated Off-site Data Backup Solutions',
      'Cybersecurity Vulnerability Scanning',
      'Custom Workstation Fleet Maintenance'
    ],
    toolsUsed: ['Fluke Cable Analyzer', 'Wi-Fi Spectrum Analyzer', 'Enterprise Firewall Appliance']
  },
  {
    id: 'data-recovery',
    title: 'NAND & HDD Data Recovery',
    shortDesc: 'Cleanroom data extraction from dead storage controllers, liquid-damaged flash drives, and corrupted RAID arrays.',
    fullDesc: 'When drives fail, our Class 100 cleanroom engineers bypass damaged firmware and swap disk heads to recover precious photos, business records, and encryption keys.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgcCOGacm2DUsc7CQYRBdIPFRNr5dUHYfnR97dwmrBFhULIi4Qw3FQ7VO_9-kWBR3_wrA0wyl-e6HM4lfposgeHsvdlPxUwBj0uFyqu514RSVqG6ri2SyHtnK4Zqymciey1ihuDHCPF9KlBvrfCuQJKAalwmGeICTTlLQHFT7UDsi-yQ-cDZijbnyZ-u0cIJ3KP-Bx8DpsRaEeAgoCSoyExzbP24ELBuCE51--mVohVo0Jb_M50x2h',
    turnaround: '2 - 5 Days',
    startingPrice: '$99',
    features: [
      'Class 100 Cleanroom Processing',
      'NAND Chip-Off Extraction',
      'RAID 0/1/5 Array Reconstruction',
      'No Data, No Fee Guarantee'
    ],
    toolsUsed: ['PC-3000 Hardware Data Recovery System', 'Class 100 Laminar Flow Bench']
  }
];

export const whyUsLabImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgcCOGacm2DUsc7CQYRBdIPFRNr5dUHYfnR97dwmrBFhULIi4Qw3FQ7VO_9-kWBR3_wrA0wyl-e6HM4lfposgeHsvdlPxUwBj0uFyqu514RSVqG6ri2SyHtnK4Zqymciey1ihuDHCPF9KlBvrfCuQJKAalwmGeICTTlLQHFT7UDsi-yQ-cDZijbnyZ-u0cIJ3KP-Bx8DpsRaEeAgoCSoyExzbP24ELBuCE51--mVohVo0Jb_M50x2h';

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: '"The precision with which they handled my high-end workstation repair was remarkable. They didn\'t just fix the issue; they optimized the entire thermal system. Truly technical experts."',
    author: 'Noor Hamaida',
    role: 'Creative Director',
    company: 'Studio X',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2cLto0TJlR1mBjcAVYhWpXCx8jFO0NqQe81ITiQLsl2M38qaggqKM0O_YGkKeUyLHryxapB3gKO0AU0yMnpcFTD5yj74ADIHumiK1Mt3bN3ERapYfwxMfXjwE7o1xv9dsQW-sL26B6516hvZyMn5gbT-LYbfvxXHJ6syR4rHVdRz5igdyLdB5itTurAggnibN2RfQJ5b61Miwofg7c9on1Bz97I3BV6rU-DvdCXm5o55DrqPFblkM',
    rating: 5
  },
  {
    id: '2',
    quote: '"Our office network was consistently failing until Virus For Electronics stepped in. Their IT audit was thorough and the implementation was seamless. Highly recommended."',
    author: 'Mohammad Jawad',
    role: 'CEO',
    company: 'TechCore Solutions',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB18WCcqlJdCkUl0pdULrGVACHRD5y1S8ZaDnbQ_twyFkGiaYxhJxHc3hX0aYdzsaGMI1d_DRXNjOmIVd2TGrUv389AscJrbqhk48twJgIHcDxBDpDVHXdsnw-MVCCM4LuflazA9Up7r6c6sjzCR0MZJpX0-UsDUfCk1R7GVBNy17Zfy0gus2FYJDbSqCdbphf_fArw0nEn1uyhQcBHL1SUpSreYrTOhcJ-Fa0aWTXl3sj2loXl9T4i',
    rating: 5
  },
  {
    id: '3',
    quote: '"When my MacBook Pro motherboard shorted out after a liquid spill, two shops told me to buy a new machine. Virus For Electronics replaced the shorted capacitors under micro-soldering and saved all my unbacked work!"',
    author: 'Tareq Al-Khatib',
    role: 'Lead Architect',
    company: 'DesignWorks',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB18WCcqlJdCkUl0pdULrGVACHRD5y1S8ZaDnbQ_twyFkGiaYxhJxHc3hX0aYdzsaGMI1d_DRXNjOmIVd2TGrUv389AscJrbqhk48twJgIHcDxBDpDVHXdsnw-MVCCM4LuflazA9Up7r6c6sjzCR0MZJpX0-UsDUfCk1R7GVBNy17Zfy0gus2FYJDbSqCdbphf_fArw0nEn1uyhQcBHL1SUpSreYrTOhcJ-Fa0aWTXl3sj2loXl9T4i',
    rating: 5
  }
];

export const valuePropsData: ValueProp[] = [
  {
    number: '01',
    icon: 'memory',
    title: 'Precision Engineering',
    description: 'We use factory-grade diagnostics and components to ensure your hardware meets original manufacturer specs.'
  },
  {
    number: '02',
    icon: 'shield',
    title: 'Guaranteed Security',
    description: 'Your data privacy is our absolute priority. We operate under strict NDAs and secure data handling protocols.'
  },
  {
    number: '03',
    icon: 'contract',
    title: 'Warranty Backed',
    description: 'Every repair and solution comes with a comprehensive 12-month warranty on parts and labor.'
  }
];

export const sampleRepairTickets: Record<string, RepairTicket> = {
  'VFE-8921': {
    ticketId: 'VFE-8921',
    customerName: 'Noor Hamaida',
    deviceModel: 'MacBook Pro 16" M2 Max (2023)',
    issueDescription: 'Thermal throttling under GPU rendering load & noisy fan bearing',
    status: 'Testing',
    progressPercentage: 75,
    receivedDate: '2026-07-27 10:15 AM',
    estimatedCompletion: '2026-07-28 05:00 PM',
    assignedTechnician: 'Eng. Rami Saleh (Senior Hardware Lead)',
    technicianNotes: [
      'Initial thermal camera imaging showed GPU core hitting 98°C due to degraded factory paste.',
      'Disassembled heatsink assembly; cleaned chassis fan bearings with isopropyl 99.9%.',
      'Applied Honeywell PTM7950 phase-change thermal pad to GPU & CPU dies.',
      'Currently executing 2-hour FurMark stress test. Current thermals stable at 72°C.'
    ],
    replacedComponents: [
      'Honeywell PTM7950 Phase Change Thermal Material',
      'Dual High-RPM Silent Fan Units'
    ],
    costEstimate: '$85.00'
  },
  'VFE-9042': {
    ticketId: 'VFE-9042',
    customerName: 'Sami Mansour',
    deviceModel: 'iPhone 15 Pro Max',
    issueDescription: 'No power on, suspected Tristar charging IC failure after car charger spike',
    status: 'Microsoldering',
    progressPercentage: 50,
    receivedDate: '2026-07-28 09:00 AM',
    estimatedCompletion: '2026-07-29 02:00 PM',
    assignedTechnician: 'Eng. Layla Zaid (Micro-soldering Specialist)',
    technicianNotes: [
      'DC power supply shows 0.02A current draw spike.',
      'Identified short circuit on PP_VDD_MAIN line near USB-C power delivery IC.',
      'Desoldered damaged IC using hot air station at 360°C.',
      'Reballing replacement power IC for re-installation.'
    ],
    replacedComponents: [
      'USB-C Power Management IC (CD3301)'
    ],
    costEstimate: '$120.00'
  },
  'VFE-7110': {
    ticketId: 'VFE-7110',
    customerName: 'TechCore Solutions',
    deviceModel: 'Dell PowerEdge R740 Server',
    issueDescription: 'RAID 5 controller battery fault & SSD slot 3 degraded',
    status: 'Ready',
    progressPercentage: 100,
    receivedDate: '2026-07-26 02:30 PM',
    estimatedCompletion: '2026-07-28 11:00 AM',
    assignedTechnician: 'Eng. Ahmad Jawad (Enterprise Systems)',
    technicianNotes: [
      'Swapped PERC RAID controller cache battery unit.',
      'Replaced degraded 1.92TB Enterprise NVMe drive in Slot 3; rebuild completed cleanly.',
      'All diagnostics green; system ready for courier pickup.'
    ],
    replacedComponents: [
      'PERC Battery Backup Unit',
      'Samsung PM9A3 1.92TB Enterprise NVMe'
    ],
    costEstimate: '$340.00'
  }
};

export const storeLocations: StoreLocation[] = [
  {
    id: 'madaba',
    name: 'Virus For Electronics - Madaba',
    address: 'Alquds St, 17110',
    city: 'Madaba, Jordan',
    phone: '+962 777 772 047',
    hours: 'Sun - Thu: 9:00 AM - 8:00 PM | Sat: 10:00 AM - 6:00 PM',
    isMainBranch: true,
    mapEmbedUrl: 'https://maps.google.com'
  }
];
