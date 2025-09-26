import styled from "@emotion/styled";

export const DetailContainer = styled.div`
  max-width: 1200px;
  width: 100%; /* Tambahkan ini agar mengikuti lebar browser */
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  min-height: 100vh;
  background: #ffffffff;
  box-sizing: border-box; /* Pastikan padding tidak overflow */
  
  /* Responsive padding untuk layar kecil */
  @media (max-width: 1200px) {
    padding: 6rem 1.5rem 3rem;
  }
  
  @media (max-width: 768px) {
    padding: 5rem 1rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 4rem 0.5rem 2rem;
  }
`;

export const BackButton = styled.button`
  background: #f6f6f6;
  color: #151418;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: background 0.3s ease;
  
  &:hover {
    background: #e0e0e0;
  }
`;

export const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #070707ff;
    
    @media (max-width: 768px) {
      font-size: 2rem; /* Lebih kecil di tablet */
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem; /* Lebih kecil di mobile */
    }
  }
  
  p {
    font-size: 1.2rem;
    color: rgb(119, 119, 121);
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      padding: 0 1rem; /* Tambah padding di mobile */
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
  margin: 2rem auto;
  display: block;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    margin: 1.5rem auto;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    margin: 1rem auto;
    border-radius: 6px;
  }
`;

export const ProjectSection = styled.div`
  margin: 3rem 0;
  
  h2 {
    color: #000000ff;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }
  
  p {
    color: rgb(119, 119, 121);
    line-height: 1.6;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
  
  ul {
    color: rgb(119, 119, 121);
    
    li {
      margin-bottom: 0.5rem;
      
      @media (max-width: 768px) {
        font-size: 0.95rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 1rem 0;
  
  @media (max-width: 480px) {
    gap: 8px;
    justify-content: center; /* Center tech badges di mobile */
  }
`;

export const TechBadge = styled.span`
  background: #f5f5f5;
  color: #333;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    padding: 4px 12px;
    font-size: 0.8rem;
  }
`;

export const Screenshots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 1rem 0;
  width: 100%; /* Pastikan mengikuti lebar kontainer */

  img {
    flex: 1 1 calc(100% - 10px); /* 3 gambar per baris dengan gap */
    max-width: calc(100% - 10px); /* Batasi lebar maksimal */
    min-width: 200px; /* Lebar minimal agar tidak terlalu kecil */
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    
    /* Responsive: 2 gambar per baris di tablet */
    @media (max-width: 768px) {
      flex: 1 1 calc(100% - 10px);
      max-width: calc(100% - 10px);
    }
    
    /* Responsive: 1 gambar per baris di mobile */
    @media (max-width: 480px) {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin: 2rem 0;
  }
`;