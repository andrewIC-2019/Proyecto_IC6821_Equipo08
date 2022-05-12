export class Ubicacion {
  private provincia: string;
  private canton: string;
  private distrito: string;
  private direccionExacta: string;
  private latitud: number;
  private longitud: number;


    /**
     * Getter $provincia
     * @return {string}
     */
	public get $provincia(): string {
		return this.provincia;
	}

    /**
     * Getter $canton
     * @return {string}
     */
	public get $canton(): string {
		return this.canton;
	}

    /**
     * Getter $distrito
     * @return {string}
     */
	public get $distrito(): string {
		return this.distrito;
	}

    /**
     * Getter $direccionExacta
     * @return {string}
     */
	public get $direccionExacta(): string {
		return this.direccionExacta;
	}

    /**
     * Getter $latitud
     * @return {int}
     */
	public get $latitud(): number {
		return this.latitud;
	}

    /**
     * Getter $longitud
     * @return {int}
     */
	public get $longitud(): number {
		return this.longitud;
	}

    /**
     * Setter $provincia
     * @param {string} value
     */
	public set $provincia(value: string) {
		this.provincia = value;
	}

    /**
     * Setter $canton
     * @param {string} value
     */
	public set $canton(value: string) {
		this.canton = value;
	}

    /**
     * Setter $distrito
     * @param {string} value
     */
	public set $distrito(value: string) {
		this.distrito = value;
	}

    /**
     * Setter $direccionExacta
     * @param {string} value
     */
	public set $direccionExacta(value: string) {
		this.direccionExacta = value;
	}

    /**
     * Setter $latitud
     * @param {int} value
     */
	public set $latitud(value: number) {
		this.latitud = value;
	}

    /**
     * Setter $longitud
     * @param {int} value
     */
	public set $longitud(value: number) {
		this.longitud = value;
	}

}
